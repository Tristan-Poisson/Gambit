--INIT MARIADB

--sudo mariadb

select user, plugin from mysql.user;
CREATE USER 'You'@'localhost' IDENTIFIED BY '';
GRANT ALL PRIVILEGES ON *.* TO 'You'@'localhost';
select user, plugin from mysql.user;
SET PASSWORD FOR 'You'@localhost = PASSWORD("mdp");

--STANDART AFTER CONNECTION

use EIP_GAMBIT;

--CREATE TABLE 1 (Users)

CREATE TABLE if not exists Users(id Integer not null PRIMARY KEY AUTO_INCREMENT DEFAULT null, Name Varchar(255) not null, First_Name Varchar(255) not null, Years Integer DEFAULT null, Email Varchar(255) not null, Status Integer not null, Premium BOOL not null);

--CREATE TABLE 2 (Permissions)

CREATE TABLE if not exists Perms(id Integer not null PRIMARY KEY AUTO_INCREMENT DEFAULT null, Permissions Integer not null, User_Id Integer not null);

--CREATE TABLE 3 (Activities)

CREATE TABLE if not exists Activities(id Integer not null PRIMARY KEY AUTO_INCREMENT DEFAULT null, Subject Varchar(255) DEFAULT null, Description Varchar(255) DEFAULT null, Link Varchar(255) DEFAULT null);

--CREATE TABLE 4 (Status)

CREATE TABLE if not exists Status(id Integer not null PRIMARY KEY AUTO_INCREMENT DEFAULT null, Title Varchar(255) not null, Description Varchar(255) DEFAULT null);

--Show * from tables 1 to 4

Select * from Users;
Select * from Permissions;
Select * from Activities;
Select * from Status;

--Link Tables 1 / 2

Select * from Users LEFT JOIN Perms ON Users.id = Perms.User_id;

--Link Tables 2 / 3

Select * from Perms LEFT JOIN Activities ON Perms.Permissions = Activities.id

--Link Tables 1 / 4

Select * from Users LEFT JOIN Status ON Users.Status = Status.id

--Exemple new line Users

INSERT INTO `Users`(`Name`, `First_Name`, `Years`, `Email`, `Status`, `Premium`) VALUES ('Smith', 'Missie', '8', 'missie.smith@gmail.com', '2', False);

INSERT INTO `Users` VALUES (NULL, 'Smith', 'Missie', '8', 'missie.smith@gmail.com', '2', False);

--Exemple new line Perms

INSERT INTO `Perms` (`Permissions`, `User_Id`) VALUES (NULL, '5');
INSERT INTO `Perms` VALUES (NULL, NULL, '5');
