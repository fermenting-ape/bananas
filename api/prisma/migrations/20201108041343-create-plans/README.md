# Migration `20201108041343-create-plans`

This migration has been generated by mkhbragg at 11/7/2020, 11:13:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "interval" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201108041343-create-plans
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,20 @@
+datasource DS {
+  // optionally set multiple providers
+  // example: provider = ["sqlite", "postgresql"]
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = ["native", "rhel-openssl-1.0.x"]
+}
+
+model Plan {
+  id                String   @id @default(uuid())
+  name              String
+  interval          String
+  size              Int
+  price             String
+  description       String
+}
```


