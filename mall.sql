/*
 Navicat Premium Data Transfer

 Source Server         : Mysql
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : mall

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 20/06/2023 20:52:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for carts
-- ----------------------------
DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NULL DEFAULT NULL,
  `productId` int(11) NULL DEFAULT NULL,
  `quantity` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `productName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `productSubtitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `productMainImage` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `productPrice` decimal(10, 2) NULL DEFAULT NULL,
  `productStatus` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `productTotalPrice` decimal(10, 2) NULL DEFAULT NULL,
  `productStock` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `productSelected` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 61 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of carts
-- ----------------------------

-- ----------------------------
-- Table structure for detail
-- ----------------------------
DROP TABLE IF EXISTS `detail`;
CREATE TABLE `detail`  (
  `id` int(11) NOT NULL,
  `categoryId` int(11) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `subtitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `mainImage` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `subImages` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `stock` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `createTime` datetime NULL DEFAULT NULL,
  `updateTime` datetime NULL DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of detail
-- ----------------------------
INSERT INTO `detail` VALUES (0, 0, '宜婴弱酸水果小内裤', '', '9Y9PIRZhp_GjgANTR7Zpow.png', '', 'richtext', 75.00, '99', '2023-06-13 21:44:28', '2023-06-13 21:44:37', '1');
INSERT INTO `detail` VALUES (1, 1, '飞鹤星飞帆幼儿配方奶粉', '', 'r13-vUgmiwTBY2hSZKJ88Q.jpg', '', 'richtext', 315.00, '99', '2023-06-15 17:08:35', '2023-06-15 17:08:41', '1');
INSERT INTO `detail` VALUES (2, 2, '伊利(YILI)金领冠珍护婴儿配方奶粉', '', 'u1msM6akCf7bF-pVnjlmsg.jpg', NULL, 'richtext', 342.00, '99', '2023-06-15 17:17:22', '2023-06-15 17:17:36', '1');
INSERT INTO `detail` VALUES (3, 3, '夕如成人护理垫老年尿不湿隔尿床垫', '', '409449034125721589730881_x.jpg', NULL, 'richtext', 16.90, '99', '2023-06-16 17:18:09', '2023-06-22 17:18:13', '1');
INSERT INTO `detail` VALUES (4, 4, '美素佳儿(Friso)港版金装系列', '', 'oab9lPbqxf4kz-xuTj_7qw.jpg', NULL, 'richtext', 150.00, '99', '2023-06-16 17:18:09', '2023-06-22 17:18:13', '1');
INSERT INTO `detail` VALUES (5, 5, '布朗博士新生儿奶瓶套装', '', 'FF7A0-IdowBBSZuAjQCH0g.jpg', NULL, 'richtext', 119.00, '99', '2023-06-16 17:18:09', '2023-06-22 17:18:13', '1');
INSERT INTO `detail` VALUES (6, 6, '宝宝金水婴儿洗发沐浴露', '', 'Hv0dDOJGrdpgyYEtQFZCPw.jpg', NULL, 'richtext', 35.00, '99', '2023-06-16 17:18:09', '2023-06-22 17:18:13', '1');
INSERT INTO `detail` VALUES (7, 7, '灵动创想奥特曼', '', '5ZLmyWRjsVJCBKMUMTJh9A.jpg', NULL, 'richtext', 79.00, '99', '2023-06-16 17:18:09', '2023-06-22 17:18:13', '1');
INSERT INTO `detail` VALUES (8, 8, 'dodoto溜娃神器', NULL, 'F-QTseg2P42z6hZRx5bk3w', NULL, 'richtext', 598.00, '99', '2023-06-16 17:18:09', '2023-06-16 17:18:09', '1');
INSERT INTO `detail` VALUES (9, 9, '史努比女童连衣裙', NULL, 'Nvzx1fOKGHK2AiCAPjlahA.jpg', NULL, 'richtext', 89.80, '99', '2023-06-16 17:18:09', '2023-06-16 17:18:09', '1');

-- ----------------------------
-- Table structure for order_product
-- ----------------------------
DROP TABLE IF EXISTS `order_product`;
CREATE TABLE `order_product`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderNo` int(11) NULL DEFAULT NULL,
  `productId` int(11) NULL DEFAULT NULL,
  `quantity` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_product
-- ----------------------------

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NULL DEFAULT NULL,
  `orderNo` int(11) NULL DEFAULT NULL,
  `shippingId` int(11) NULL DEFAULT NULL,
  `payment` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `paymentType` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `postage` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `paymentTime` datetime NULL DEFAULT NULL,
  `sendTime` datetime NULL DEFAULT NULL,
  `endTime` datetime NULL DEFAULT NULL,
  `closeTime` datetime NULL DEFAULT NULL,
  `createTime` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for shippings
-- ----------------------------
DROP TABLE IF EXISTS `shippings`;
CREATE TABLE `shippings`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NULL DEFAULT NULL,
  `receiverName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `receiverPhone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `receiverMobile` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `receiverProvince` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `receiverCity` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `receiverDistrict` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `receiverAddress` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `receiverZip` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shippings
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `role` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `createTime` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `updateTime` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '123', '123', 'jastone@yahoo.com', '212-996-5222', 'LVHfhKZacF', '10:34:41', '2003-10-11 09:49:28');

SET FOREIGN_KEY_CHECKS = 1;
