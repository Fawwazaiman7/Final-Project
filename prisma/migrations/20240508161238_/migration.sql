/*
  Warnings:

  - You are about to drop the column `detail` on the `todoList` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `todoList` table. All the data in the column will be lost.
  - Added the required column `jurusan` to the `todoList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kelas` to the `todoList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `todoList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prodi` to the `todoList` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_todoList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "prodi" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_todoList" ("createdAt", "done", "id") SELECT "createdAt", "done", "id" FROM "todoList";
DROP TABLE "todoList";
ALTER TABLE "new_todoList" RENAME TO "todoList";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
