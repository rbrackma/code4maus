#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

const type = process.argv[2];
const filename = process.argv[3];

const importMain = async function() {
    const projectFile = await fs.readFile(filename);
    const project = JSON.parse(projectFile);

    switch(type) {
        case 'costumes':
            await importCostumes(project);
            break;
        case 'backdrop':
            console.log("not implemented");
            break;
        default:
            console.error("invalid type. Use 'costumes' or 'backdrop'");
            process.exit(1);
    }
}

const importCostumes = async function(project) {
    const costumeInserts = {};

    const insertedSprites = project.targets
        .filter(t => !t.isStage)
        .map(sprite => {
            const costumes = sprite.costumes
                .map(c => ({
                    costumeName: c.name,
                    baseLayerID: -1,
                    baseLayerMD5: c.md5ext,
                    bitmapResolution: c.bitmapResolution,
                    rotationCenterX: c.rotationCenterX,
                    rotationCenterY: c.rotationCenterY,
                }));
            if (costumes.length < 1) {
                return null;
            }

            costumes.map((c, key) => ({
                name: `${sprite.name}-${String.fromCharCode(97+key)}`,
                md5: c.baseLayerMD5,
                type: "costume",
                tags: [],
                info: [
                    c.rotationCenterX,
                    c.rotationCenterY,
                    c.bitmapResolution,
                ]
            })).forEach(c => { costumeInserts[c.name] = c; });

            const sounds = sprite.sounds
                .map(s => ({
                    soundName: s.name,
                    soundID: -1,
                    md5: s.md5ext,
                    sampleCount: s.sampleCount,
                    rate: s.rate,
                    format: "",
                }));

            return {
                name: sprite.name,
                baseLayerID: -1,
                md5: costumes[0].baseLayerMD5,
                type: "sprite",
                tags: [],
                info: [0,2],
                json: {
                    objName: sprite.name,
                    sounds,
                    costumes,
                    currentCostumeIndex: sprite.currentCostume,
                    scratchX: sprite.x,
                    scratchY: sprite.y,
                    scale: 1,
                    direction: sprite.direction,
                    rotationStyle: "normal",
                    isDraggable: sprite.draggable,
                    visible: true,
                    spriteInfo: {},
                }
            };
        })
        .filter(s => !!s)
        .reduce((acc, s) => {
            acc[s.name] = s;
            return acc;
        }, {});

    const spritesPath = path.resolve(__dirname, '../src/lib/libraries/sprites.json');
    const spritesFile = await fs.readFile(spritesPath);
    const sprites = JSON.parse(spritesFile);

    const spritesResult = sprites.map(s => {
        if (!(s.name in insertedSprites)) {
            return s;
        }
        const insert = insertedSprites[s.name];
        insertedSprites[s.name] = null;
        return insert;
    }).concat(Object.values(insertedSprites).filter(s => !!s));

    await fs.writeFile(spritesPath, JSON.stringify(spritesResult, null, 4));

    const costumesPath = path.resolve(__dirname, '../src/lib/libraries/costumes.json');
    const costumesFile = await fs.readFile(costumesPath);
    const costumes = JSON.parse(costumesFile);

    const costumesResult = costumes.map(c => {
        if (!(c.name in costumeInserts)) {
            return c;
        }
        const insert = costumeInserts[c.name];
        costumeInserts[c.name] = null;
        return insert;
    }).concat(Object.values(costumeInserts).filter(c => !!c));

    await fs.writeFile(costumesPath, JSON.stringify(costumesResult, null, 4));
}

importMain().then(() => console.log("Done")).catch(e => { console.log("Failed:", e); process.exit(2) });