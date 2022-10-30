CREATE DATABASE USER_MANAGEMENT;

CREATE TABLE public.Users(
    userID serial NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY(userID)
);

CREATE TABLE public.UserDetails(
    UserDetailsID serial NOT NULL,
    userID INT NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DateOfBirth date NOT NULL,
    Province VARCHAR(20) NOT NULL,
    Facilitator boolean NOT NULL,
    PRIMARY KEY(UserDetailsID)
);

ALTER TABLE public.UserDetails
    ADD FOREIGN KEY (userID)
    REFERENCES public.Users (userID)
    ON DELETE CASCADE
    NOT VALID;

INSERT INTO Users(password)
VALUES('Mashoto*99');

INSERT INTO UserDetails(userID,FirstName,LastName,DateOfBirth,Province,Facilitator)
VALUES(1,'Mash','Molefe','1999-03-26','Limpopo',True);

