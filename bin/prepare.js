const fs = require('fs');

async function run() {
  const excluded = ['build', 'package.json', 'README.md'];

  const names = await fs.promises.readdir(process.cwd());

  await Promise.all(names.map(async (name) => {
    if (!excluded.includes(name)) {
      await fs.promises.unlink(name);
    }
  }));
}

run();
