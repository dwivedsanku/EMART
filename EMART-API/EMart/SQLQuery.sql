create database EMARTDB
use EMARTDB
create table Buyer(bid int primary key,
username varchar(20) not null,
password varchar(20) not null,
email varchar(20) not null,
mobileno varchar(20) not null,
datetime date)
select * from Buyer
delete Buyer where bid=827
create table Seller(sid int primary key,
username varchar(20) not null,
password varchar(20) not null,
companyname varchar(20) not null,
gst int not null,
aboutcmpy varchar(20),
address varchar(20) not null,
website varchar(20),
email varchar(20) not null,
mobileno varchar(20) not null)
select * from Seller
delete Seller where sid=1
create table Category(cid int primary key,
cname varchar(20) not null,
cdetails varchar(20))
insert into Category values(1,'fashion','men fashion');
select * from Category
delete Category where cid=955
create table SubCategory(subid int primary key,
subname varchar(20) not null,
cid int foreign key references Category(cid),
sdetails varchar(20),
gst int)
alter table SubCategory add cid int foreign key references Category(cid)
alter table SubCategory add cname varchar(20)
insert into SubCategory values(1,'Men Shirts',1,'men fashion',12);
insert into SubCategory values(143,'Mobiles',870,'ele',34,'electronics');
insert into SubCategory values(144,'Laptops',870,'ele',54,'electronics');
insert into SubCategory values(145,'Camera',870,'ele',38,'electronics');
insert into SubCategory values(152,'Mens',238,'fas',341,'fashion');
insert into SubCategory values(153,'Girls',238,'fas',545,'fashion');
insert into SubCategory values(154,'Kids',238,'fas',382,'fashion');
insert into SubCategory values(163,'Teddy',301,'kid',341,'toys');
insert into SubCategory values(162,'Barbie',301,'kid',545,'toys');
insert into SubCategory values(167,'Doll',301,'kid',382,'toys');

select * from SubCategory
delete SubCategory where subid=307
alter table SubCategory drop column cid
create table Items(id int primary key,
categoryid int foreign key references Category(cid),
subcatergoryid int foreign key references SubCategory(subid),
price varchar(20) not null,
itemname varchar(20) not null,
description varchar(20),
stockno int,
remarks varchar(20))
alter table Items add categoryid int foreign key references Category(cid)
alter table Items add subcategoryid int foreign key references SubCategory(subid)
select * from Items
delete Items where id=9803;
alter table Items add imagename varchar(50)
alter table Items add sid int
create table Purchase_history(id int primary key,
bid int foreign key references Buyer(bid),
sid int foreign key references Seller(sid),
transactiontype varchar(20) not null,
itemid int foreign key references Items(id),
noofitems int,
datetime date not null,
remarks varchar(20))
select * from Purchase_history
delete Purchase_history where id=674
ALTER TABLE Purchase_history ADD transactionstatus varchar(20)
create table Users(uname varchar(20) not null,
pwd varchar(20) not null)
select * from Users
create table Discounts(id int,
code varchar(20),
percentage decimal,
sdate date not null,
edate date not null,
description varchar(20))
select * from Discounts
alter table Items add sid int foreign key references Seller(sid)
select * from Items
create table Cart(id int primary key,
categoryid int foreign key references Category(cid),
subcatergoryid int foreign key references SubCategory(subid),
sid int foreign key references Seller(sid),
bid int foreign key references Buyer(bid),
itemid int foreign key references Items(id),
price varchar(20) not null,
itemname varchar(20) not null,
description varchar(20),
stockno int,
remarks varchar(20),
imagename varchar(20))
select * from Cart
delete Items where id=9896
