-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'FARMER');

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Products" (
    "product_id" TEXT NOT NULL,
    "farmer_id" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "usage" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "quantity" INTEGER,
    "stripe_id" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "Order" (
    "order_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "stripe_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total_price" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "Farmer" (
    "farmer_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "farm_location" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Farmer_pkey" PRIMARY KEY ("farmer_id")
);

-- CreateTable
CREATE TABLE "_OrderToProducts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_name_key" ON "User"("email", "name");

-- CreateIndex
CREATE UNIQUE INDEX "_OrderToProducts_AB_unique" ON "_OrderToProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderToProducts_B_index" ON "_OrderToProducts"("B");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_farmer_id_fkey" FOREIGN KEY ("farmer_id") REFERENCES "Farmer"("farmer_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToProducts" ADD CONSTRAINT "_OrderToProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Order"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToProducts" ADD CONSTRAINT "_OrderToProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;
