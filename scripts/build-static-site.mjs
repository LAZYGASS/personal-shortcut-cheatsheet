import { cpSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";

const projectDirectory = resolve(import.meta.dirname, "..");
const outputDirectory = resolve(projectDirectory, "public");
const publicFiles = ["index.html", "robots.txt"];
const publicDirectories = ["css", "html", "js"];
const publicDocumentFiles = ["md/codex-cheat-sheet-ko.md"];

// 배포 산출물에 작업용 원본 문서와 생성 도구가 섞이지 않도록 허용한 파일만 복사한다.
rmSync(outputDirectory, { force: true, recursive: true });
mkdirSync(outputDirectory, { recursive: true });

for (const fileName of publicFiles) {
    cpSync(resolve(projectDirectory, fileName), resolve(outputDirectory, fileName));
}

for (const directoryName of publicDirectories) {
    cpSync(resolve(projectDirectory, directoryName), resolve(outputDirectory, directoryName), {
        recursive: true,
    });
}

for (const fileName of publicDocumentFiles) {
    const destinationPath = resolve(outputDirectory, fileName);

    mkdirSync(dirname(destinationPath), { recursive: true });
    cpSync(resolve(projectDirectory, fileName), destinationPath);
}
