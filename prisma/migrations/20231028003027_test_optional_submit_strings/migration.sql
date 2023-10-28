-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PollDelivered" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question" TEXT,
    "checkboxes" TEXT,
    "username" TEXT
);
INSERT INTO "new_PollDelivered" ("checkboxes", "id", "question", "username") SELECT "checkboxes", "id", "question", "username" FROM "PollDelivered";
DROP TABLE "PollDelivered";
ALTER TABLE "new_PollDelivered" RENAME TO "PollDelivered";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
