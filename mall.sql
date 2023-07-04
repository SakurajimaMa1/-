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

 Date: 04/07/2023 22:26:48
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
) ENGINE = MyISAM AUTO_INCREMENT = 90 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

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
INSERT INTO `detail` VALUES (10, 10, '佳贝艾特悦白3段', NULL, '163471159445105255.png', NULL, 'richtext', 194.00, '99', '2023-07-03 17:39:00', '2023-07-04 17:39:06', '1');
INSERT INTO `detail` VALUES (8, 8, 'dodoto溜娃神器', NULL, 'F-QTseg2P42z6hZRx5bk3w', NULL, 'richtext', 598.00, '99', '2023-06-16 17:18:09', '2023-06-16 17:18:09', '1');
INSERT INTO `detail` VALUES (9, 9, '史努比女童连衣裙', NULL, 'Nvzx1fOKGHK2AiCAPjlahA.jpg', NULL, 'richtext', 89.80, '99', '2023-06-16 17:18:09', '2023-06-16 17:18:09', '1');
INSERT INTO `detail` VALUES (11, 11, '飞鹤飞帆 幼儿配方奶粉 3段', NULL, '9KUhtrpcStYIo3s9w_ayBA.jpg', NULL, 'richtext', 168.00, '99', '2023-07-03 17:39:52', '2023-07-04 17:39:55', '1');
INSERT INTO `detail` VALUES (12, 12, '雀巢Nestle超启能恩3幼儿配方奶粉', NULL, '5xibf_8kCeU_mHEjTE9UYw.jpg', NULL, 'richtext', 299.00, '99', '2023-07-03 17:40:40', '2023-07-04 17:40:43', '1');
INSERT INTO `detail` VALUES (13, 13, '爱他美(Aptamil)幼儿配方奶粉3段', NULL, 'iBxUFLYplFMYWw9b2yKBNA.jpg', NULL, 'richtext', 170.00, '99', '2023-07-03 17:41:52', '2023-07-04 17:41:55', '1');
INSERT INTO `detail` VALUES (14, 14, '皇家美素佳儿(Friso Prestige)幼儿配方奶粉', '', 'P2WQiA63NC__iKidfEZvUA.jpg', '', 'richtext', 311.00, '99', '2023-07-03 17:43:18', '2023-07-04 17:43:22', '1');
INSERT INTO `detail` VALUES (15, 15, '惠氏启赋(Wyeth illuma)有机奶粉3段', NULL, '8SMpvyHw6VWBw50GM6yT_w.png', NULL, 'richtext', 280.00, '99', '2023-07-03 17:44:53', '2023-07-04 17:44:56', '1');
INSERT INTO `detail` VALUES (16, 16, '日本进口花王(Merries)妙而舒', NULL, 'xu6_kAGTkbXmzGzkQV33Hw.jpg', NULL, 'richtext', 108.99, '99', '2023-07-03 18:07:28', '2023-07-04 18:07:31', '1');
INSERT INTO `detail` VALUES (17, 17, '安儿乐(Anerle)干爽超薄婴儿纸尿裤', NULL, '3EMdnijgoQrxi2pCWt9ORQ.jpg', NULL, 'richtext', 129.00, '99', '2023-07-03 18:08:23', '2023-07-04 18:08:26', '1');
INSERT INTO `detail` VALUES (18, 18, '好奇尿不湿金装成长裤', NULL, '2m33498Hd_joGe7FpPPMcA.jpg', NULL, 'richtext', 142.00, '99', '2023-07-03 18:09:14', '2023-07-04 18:09:17', '1');
INSERT INTO `detail` VALUES (19, 19, '好奇铂金装倍柔亲肤纸尿裤', NULL, 'HYAwg3C0fAM0DKGZgAHmJg.jpg', NULL, 'richtext', 156.80, '99', '2023-07-03 18:10:04', '2023-07-04 18:10:07', '1');
INSERT INTO `detail` VALUES (20, 20, '帮宝适清新帮拉拉裤', NULL, 'xvsRNO-ZK1a2_E00kDBw4Q.jpg', NULL, 'richtext', 71.00, '99', '2023-07-03 18:10:54', '2023-07-04 18:10:57', '1');
INSERT INTO `detail` VALUES (21, 21, '好奇金装纸尿裤', NULL, 'h_7Qb9Tky_aUXCnV6-nOng.jpg', NULL, 'richtext', 63.00, '99', '2023-07-03 18:11:44', '2023-07-04 18:11:47', '1');
INSERT INTO `detail` VALUES (22, 22, '唯新食品 90g原味肉酥(袋)', NULL, 'wNI5nQ041pEgS0niVPWWxw.jpg', NULL, 'richtext', 24.00, '99', '2023-07-03 18:14:50', '2023-07-04 18:14:52', '1');
INSERT INTO `detail` VALUES (23, 23, '亨氏(Heinz)鸡肉蔬菜营养米粉400g', NULL, '-LOEWfcSRb7jXdZv8Z4mow.jpg', NULL, 'richtext', 38.40, '99', '2023-07-03 18:15:58', '2023-07-04 18:16:01', '1');
INSERT INTO `detail` VALUES (24, 24, 'gerber嘉宝原味营养米粉', NULL, '_3Pv-aJdfQbMzNdsWhp_dA.jpg', NULL, 'richtext', 125.70, '99', '2023-07-03 18:17:01', '2023-07-04 18:17:04', '1');
INSERT INTO `detail` VALUES (25, 25, 'babycare新西兰辅食品牌光合星球酸奶溶豆', NULL, 'a730QxCCv3baY4BAzAwmQQ.jpg', NULL, 'richtext', 29.90, '99', '2023-07-03 18:18:09', '2023-07-04 18:18:13', '1');
INSERT INTO `detail` VALUES (26, 26, '亨氏(Heinz)婴儿营养米粉组合装', NULL, '26gpaAOMWEzFkOjUqwb9tg.jpg', NULL, 'richtext', 53.00, '99', '2023-07-03 18:19:28', '2023-07-04 18:19:31', '1');
INSERT INTO `detail` VALUES (27, 27, 'babycare新西兰辅食品牌光合星球酸奶', NULL, '0UzOrTgDaqCjj13Tz8SOtQ.jpg', NULL, 'richtext', 29.90, '99', '2023-07-03 18:20:52', '2023-07-04 18:20:54', '1');

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
) ENGINE = MyISAM AUTO_INCREMENT = 62 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

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
) ENGINE = MyISAM AUTO_INCREMENT = 43 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for overview
-- ----------------------------
DROP TABLE IF EXISTS `overview`;
CREATE TABLE `overview`  (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of overview
-- ----------------------------
INSERT INTO `overview` VALUES (10, '佳贝艾', '163471159445105255.png');
INSERT INTO `overview` VALUES (11, '飞鹤飞帆', '9KUhtrpcStYIo3s9w_ayBA.jpg');
INSERT INTO `overview` VALUES (12, '雀巢', '5xibf_8kCeU_mHEjTE9UYw.jpg');
INSERT INTO `overview` VALUES (13, '爱他美', 'iBxUFLYplFMYWw9b2yKBNA.jpg');
INSERT INTO `overview` VALUES (14, '美素佳儿', 'P2WQiA63NC__iKidfEZvUA.jpg');
INSERT INTO `overview` VALUES (15, '惠氏启赋', '8SMpvyHw6VWBw50GM6yT_w.png');
INSERT INTO `overview` VALUES (16, '花王', 'xu6_kAGTkbXmzGzkQV33Hw.jpg');
INSERT INTO `overview` VALUES (17, '安儿乐', '3EMdnijgoQrxi2pCWt9ORQ.jpg');
INSERT INTO `overview` VALUES (18, '好奇', '2m33498Hd_joGe7FpPPMcA.jpg');
INSERT INTO `overview` VALUES (19, '好奇', 'HYAwg3C0fAM0DKGZgAHmJg.jpg');
INSERT INTO `overview` VALUES (20, '帮宝适', 'xvsRNO-ZK1a2_E00kDBw4Q.jpg');
INSERT INTO `overview` VALUES (21, '好奇', 'h_7Qb9Tky_aUXCnV6-nOng.jpg');
INSERT INTO `overview` VALUES (22, '原味肉酥', 'wNI5nQ041pEgS0niVPWWxw.jpg');
INSERT INTO `overview` VALUES (23, '营养米粉', '-LOEWfcSRb7jXdZv8Z4mow.jpg');
INSERT INTO `overview` VALUES (24, '营养米粉', '_3Pv-aJdfQbMzNdsWhp_dA.jpg');
INSERT INTO `overview` VALUES (25, '酸奶溶豆', 'a730QxCCv3baY4BAzAwmQQ.jpg');
INSERT INTO `overview` VALUES (26, '婴儿营养', '26gpaAOMWEzFkOjUqwb9tg.jpg');
INSERT INTO `overview` VALUES (27, '星球酸奶', '0UzOrTgDaqCjj13Tz8SOtQ.jpg');

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
) ENGINE = MyISAM AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shippings
-- ----------------------------
INSERT INTO `shippings` VALUES (6, 1, '张三', 'undefined', '11111111111', '天津', '天津', '河北', '111', '111111');

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
