-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 07, 2023 at 07:55 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backlog_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `login_id` int(11) DEFAULT NULL,
  `detail_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `login_id`, `detail_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `approvals`
--

CREATE TABLE `approvals` (
  `id` int(11) NOT NULL,
  `status_id` int(11) DEFAULT NULL,
  `Requirements_id` int(11) NOT NULL,
  `approver_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `approver`
--

CREATE TABLE `approver` (
  `id` int(11) NOT NULL,
  `login_id` int(11) DEFAULT NULL,
  `detail_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `approver`
--

INSERT INTO `approver` (`id`, `login_id`, `detail_id`) VALUES
(2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `architect`
--

CREATE TABLE `architect` (
  `id` int(11) NOT NULL,
  `Approvals_id` int(11) DEFAULT NULL,
  `prototype_id` int(11) DEFAULT NULL,
  `preparedata_id` int(11) DEFAULT NULL,
  `coding_id` int(11) DEFAULT NULL,
  `testing_id` int(11) DEFAULT NULL,
  `valuerelease_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `asis`
--

CREATE TABLE `asis` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `asis`
--

INSERT INTO `asis` (`id`, `name`) VALUES
(1, 'Manual Process : ยังไม่มีระบบ'),
(2, 'Digitization : ยกระดับระบบ');

-- --------------------------------------------------------

--
-- Table structure for table `budget`
--

CREATE TABLE `budget` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `budget`
--

INSERT INTO `budget` (`id`, `name`) VALUES
(1, 'มีงบจ้าง Outsource'),
(2, 'ไม่มีงบขอใช้ IT Develop');

-- --------------------------------------------------------

--
-- Table structure for table `coding`
--

CREATE TABLE `coding` (
  `id` int(11) NOT NULL,
  `link` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `confirmprototype`
--

CREATE TABLE `confirmprototype` (
  `id` int(11) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `topic` varchar(45) DEFAULT NULL,
  `detail` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `deploy`
--

CREATE TABLE `deploy` (
  `id` int(11) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `topic` varchar(45) DEFAULT NULL,
  `detail` varchar(45) DEFAULT NULL,
  `Architect_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `detail`
--

CREATE TABLE `detail` (
  `id` int(11) NOT NULL,
  `codeuser` varchar(45) DEFAULT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `nickname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `detail`
--

INSERT INTO `detail` (`id`, `codeuser`, `firstname`, `lastname`, `nickname`, `email`) VALUES
(1, 'A123456', 'sakeezt', 'admin', 'a', 'a@gmail.com'),
(2, 'A456789', 'Sakeezt', 'approver', 'b', 'b@gmail.com'),
(3, 'A7894', 'Sakeezt', 'user', 'c', 'c@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `doingby`
--

CREATE TABLE `doingby` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `doingby`
--

INSERT INTO `doingby` (`id`, `name`) VALUES
(1, 'Self Development'),
(2, 'ID4 Develop'),
(3, 'IT Develop'),
(4, ' Outsource'),
(5, 'Student Internship'),
(6, 'other');

-- --------------------------------------------------------

--
-- Table structure for table `emailreqtoapprover`
--

CREATE TABLE `emailreqtoapprover` (
  `id` int(11) NOT NULL,
  `topic` varchar(45) DEFAULT NULL,
  `detail` varchar(200) DEFAULT NULL,
  `approver_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `reason` varchar(200) DEFAULT NULL,
  `deletetime` datetime DEFAULT NULL,
  `processname` varchar(45) DEFAULT NULL,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  `painpoint` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `results_benefit` varchar(200) DEFAULT NULL,
  `exclusion_constraints` varchar(200) DEFAULT NULL,
  `work_flow` varchar(45) DEFAULT NULL,
  `extract_file` varchar(45) DEFAULT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `approver_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `tobe_id` int(11) DEFAULT NULL,
  `asis_id` int(11) DEFAULT NULL,
  `doingby_id` int(11) DEFAULT NULL,
  `budget_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `reason`, `deletetime`, `processname`, `startdate`, `enddate`, `painpoint`, `description`, `results_benefit`, `exclusion_constraints`, `work_flow`, `extract_file`, `admin_id`, `approver_id`, `user_id`, `tobe_id`, `asis_id`, `doingby_id`, `budget_id`) VALUES
(36, 'sssssssssssssssssssssssssssssssssss', '2023-02-06 15:30:32', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(37, NULL, NULL, 'testtime 4', '2023-02-06', '2023-02-08', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, 1, 1, 1, 1),
(38, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2023-02-07 10:40:02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `role_id`) VALUES
(1, 'admin', '123456789', 1),
(2, 'approver', '123456789', 2),
(3, 'user', '123456789', 3);

-- --------------------------------------------------------

--
-- Table structure for table `preparedata`
--

CREATE TABLE `preparedata` (
  `id` int(11) NOT NULL,
  `file` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `projectmanagement`
--

CREATE TABLE `projectmanagement` (
  `id` int(11) NOT NULL,
  `datestart` date DEFAULT NULL,
  `dateend` date DEFAULT NULL,
  `requirements_id` int(11) DEFAULT NULL,
  `emailreqtoapprover_id` int(11) DEFAULT NULL,
  `approvals_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `prototype`
--

CREATE TABLE `prototype` (
  `id` int(11) NOT NULL,
  `file` varchar(200) DEFAULT NULL,
  `link` varchar(45) DEFAULT NULL,
  `confirmprototype_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `requirements`
--

CREATE TABLE `requirements` (
  `id` int(11) NOT NULL,
  `processname` varchar(45) DEFAULT NULL,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  `painpoint` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `results_benefit` varchar(45) DEFAULT NULL,
  `exclusion_constraints` varchar(45) DEFAULT NULL,
  `work_flow` varchar(45) DEFAULT NULL,
  `extract_file` varchar(45) DEFAULT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `approver_id` int(11) DEFAULT NULL,
  `tobe_id` int(11) DEFAULT NULL,
  `asis_id` int(11) DEFAULT NULL,
  `doingby_id` int(11) DEFAULT NULL,
  `budget_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'approver'),
(3, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `testing`
--

CREATE TABLE `testing` (
  `id` int(11) NOT NULL,
  `link` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tobe`
--

CREATE TABLE `tobe` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tobe`
--

INSERT INTO `tobe` (`id`, `name`) VALUES
(1, 'Digitization : ยกระดับระบบ'),
(2, 'Digitalization : เปลี่ยนกระบวนการทำงาน'),
(3, 'Digital Transformation : ส่งมอบลูกค้า');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login_id` int(11) NOT NULL,
  `detail_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `login_id`, `detail_id`) VALUES
(3, 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `valuerelease`
--

CREATE TABLE `valuerelease` (
  `id` int(11) NOT NULL,
  `mandays` varchar(45) DEFAULT NULL,
  `wage` float DEFAULT NULL,
  `Estimate` float DEFAULT NULL,
  `valuerelease` varchar(45) DEFAULT NULL,
  `benefit people` varchar(45) DEFAULT NULL,
  `benefitmoney` varchar(45) DEFAULT NULL,
  `benefit peoplemandays` varchar(45) DEFAULT NULL,
  `filebefore` varchar(100) DEFAULT NULL,
  `fileafter` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_admin_login1_idx` (`login_id`),
  ADD KEY `fk_admin_detail1_idx` (`detail_id`);

--
-- Indexes for table `approvals`
--
ALTER TABLE `approvals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Approvals_status1_idx` (`status_id`),
  ADD KEY `fk_Approvals_Requirements1_idx` (`Requirements_id`),
  ADD KEY `fk_approvals_approver1_idx` (`approver_id`);

--
-- Indexes for table `approver`
--
ALTER TABLE `approver`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_approver_login1_idx` (`login_id`),
  ADD KEY `fk_approver_detail1_idx` (`detail_id`);

--
-- Indexes for table `architect`
--
ALTER TABLE `architect`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Architect_Approvals1_idx` (`Approvals_id`),
  ADD KEY `fk_Architect_prototype1_idx` (`prototype_id`),
  ADD KEY `fk_Architect_preparedata1_idx` (`preparedata_id`),
  ADD KEY `fk_Architect_coding1_idx` (`coding_id`),
  ADD KEY `fk_Architect_testing1_idx` (`testing_id`),
  ADD KEY `fk_architect_valuerelease1_idx` (`valuerelease_id`);

--
-- Indexes for table `asis`
--
ALTER TABLE `asis`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indexes for table `budget`
--
ALTER TABLE `budget`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `coding`
--
ALTER TABLE `coding`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `link_UNIQUE` (`link`);

--
-- Indexes for table `confirmprototype`
--
ALTER TABLE `confirmprototype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deploy`
--
ALTER TABLE `deploy`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_delivered_Architect1_idx` (`Architect_id`);

--
-- Indexes for table `detail`
--
ALTER TABLE `detail`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD UNIQUE KEY `iduser_UNIQUE` (`codeuser`);

--
-- Indexes for table `doingby`
--
ALTER TABLE `doingby`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `emailreqtoapprover`
--
ALTER TABLE `emailreqtoapprover`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_emailreqtoapprover_approver1_idx` (`approver_id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_admin_idx` (`admin_id`),
  ADD KEY `fk_approver_idx` (`approver_id`),
  ADD KEY `fk_user_idx` (`user_id`),
  ADD KEY `fk_doingby_idx` (`doingby_id`),
  ADD KEY `fk_asis_idx` (`asis_id`),
  ADD KEY `fk_budget_idx` (`budget_id`),
  ADD KEY `fk_tobe_idx` (`tobe_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`),
  ADD KEY `fk_login_role1_idx` (`role_id`);

--
-- Indexes for table `preparedata`
--
ALTER TABLE `preparedata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projectmanagement`
--
ALTER TABLE `projectmanagement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_projectmanagement_requirements1_idx` (`requirements_id`),
  ADD KEY `fk_projectmanagement_emailreqtoapprover1_idx` (`emailreqtoapprover_id`),
  ADD KEY `fk_projectmanagement_approvals1_idx` (`approvals_id`);

--
-- Indexes for table `prototype`
--
ALTER TABLE `prototype`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_prototype_confirmprototype1_idx` (`confirmprototype_id`);

--
-- Indexes for table `requirements`
--
ALTER TABLE `requirements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_requirements_admin1_idx` (`admin_id`),
  ADD KEY `fk_requirements_user1_idx` (`user_id`),
  ADD KEY `fk_requirements_approver1_idx` (`approver_id`),
  ADD KEY `fk_requirements_tobe1_idx` (`tobe_id`),
  ADD KEY `fk_requirements_asis1_idx` (`asis_id`),
  ADD KEY `fk_requirements_doingby1_idx` (`doingby_id`),
  ADD KEY `fk_requirements_budget1_idx` (`budget_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testing`
--
ALTER TABLE `testing`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `link_UNIQUE` (`link`);

--
-- Indexes for table `tobe`
--
ALTER TABLE `tobe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_login1_idx` (`login_id`),
  ADD KEY `fk_user_detail1_idx` (`detail_id`);

--
-- Indexes for table `valuerelease`
--
ALTER TABLE `valuerelease`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `approvals`
--
ALTER TABLE `approvals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `architect`
--
ALTER TABLE `architect`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `coding`
--
ALTER TABLE `coding`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `deploy`
--
ALTER TABLE `deploy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detail`
--
ALTER TABLE `detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `emailreqtoapprover`
--
ALTER TABLE `emailreqtoapprover`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `preparedata`
--
ALTER TABLE `preparedata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projectmanagement`
--
ALTER TABLE `projectmanagement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `prototype`
--
ALTER TABLE `prototype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `requirements`
--
ALTER TABLE `requirements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `testing`
--
ALTER TABLE `testing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `valuerelease`
--
ALTER TABLE `valuerelease`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `fk_admin_detail1` FOREIGN KEY (`detail_id`) REFERENCES `detail` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_admin_login1` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `approvals`
--
ALTER TABLE `approvals`
  ADD CONSTRAINT `fk_Approvals_Requirements1` FOREIGN KEY (`Requirements_id`) REFERENCES `requirements` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Approvals_status1` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_approvals_approver1` FOREIGN KEY (`approver_id`) REFERENCES `approver` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `approver`
--
ALTER TABLE `approver`
  ADD CONSTRAINT `fk_approver_detail1` FOREIGN KEY (`detail_id`) REFERENCES `detail` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_approver_login1` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `architect`
--
ALTER TABLE `architect`
  ADD CONSTRAINT `fk_Architect_Approvals1` FOREIGN KEY (`Approvals_id`) REFERENCES `approvals` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Architect_coding1` FOREIGN KEY (`coding_id`) REFERENCES `coding` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Architect_preparedata1` FOREIGN KEY (`preparedata_id`) REFERENCES `preparedata` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Architect_prototype1` FOREIGN KEY (`prototype_id`) REFERENCES `prototype` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Architect_testing1` FOREIGN KEY (`testing_id`) REFERENCES `testing` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_architect_valuerelease1` FOREIGN KEY (`valuerelease_id`) REFERENCES `valuerelease` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `deploy`
--
ALTER TABLE `deploy`
  ADD CONSTRAINT `fk_delivered_Architect1` FOREIGN KEY (`Architect_id`) REFERENCES `architect` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `emailreqtoapprover`
--
ALTER TABLE `emailreqtoapprover`
  ADD CONSTRAINT `fk_emailreqtoapprover_approver1` FOREIGN KEY (`approver_id`) REFERENCES `approver` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `fk_admin` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_approver` FOREIGN KEY (`approver_id`) REFERENCES `approver` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_asis` FOREIGN KEY (`asis_id`) REFERENCES `asis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_budget` FOREIGN KEY (`budget_id`) REFERENCES `budget` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_doingby` FOREIGN KEY (`doingby_id`) REFERENCES `doingby` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tobe` FOREIGN KEY (`tobe_id`) REFERENCES `tobe` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `fk_login_role1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `projectmanagement`
--
ALTER TABLE `projectmanagement`
  ADD CONSTRAINT `fk_projectmanagement_approvals1` FOREIGN KEY (`approvals_id`) REFERENCES `approvals` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_projectmanagement_emailreqtoapprover1` FOREIGN KEY (`emailreqtoapprover_id`) REFERENCES `emailreqtoapprover` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_projectmanagement_requirements1` FOREIGN KEY (`requirements_id`) REFERENCES `requirements` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `prototype`
--
ALTER TABLE `prototype`
  ADD CONSTRAINT `fk_prototype_confirmprototype1` FOREIGN KEY (`confirmprototype_id`) REFERENCES `confirmprototype` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `requirements`
--
ALTER TABLE `requirements`
  ADD CONSTRAINT `fk_requirements_admin1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_requirements_approver1` FOREIGN KEY (`approver_id`) REFERENCES `approver` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_requirements_asis1` FOREIGN KEY (`asis_id`) REFERENCES `asis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_requirements_budget1` FOREIGN KEY (`budget_id`) REFERENCES `budget` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_requirements_doingby1` FOREIGN KEY (`doingby_id`) REFERENCES `doingby` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_requirements_tobe1` FOREIGN KEY (`tobe_id`) REFERENCES `tobe` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_requirements_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_detail1` FOREIGN KEY (`detail_id`) REFERENCES `detail` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user_login1` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
