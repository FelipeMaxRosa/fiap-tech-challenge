CREATE SCHEMA IF NOT EXISTS `fastfoodius` DEFAULT CHARACTER SET utf8;
USE `fastfoodius`;

CREATE TABLE IF NOT EXISTS `fastfoodius`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
)
ENGINE = InnoDB;

INSERT INTO `fastfoodius`.`users` (name, email) VALUES ('felipe', 'felipemax.suporteti@gmail.com');