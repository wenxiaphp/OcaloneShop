/*
Navicat MySQL Data Transfer

Source Server         : 47.93.121.52
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : ocaloneshop

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2017-10-31 15:05:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for os_user
-- ----------------------------
DROP TABLE IF EXISTS `os_user`;
CREATE TABLE `os_user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(32) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL COMMENT 'avatar：头像',
  `phone` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of os_user
-- ----------------------------
