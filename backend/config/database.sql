-- Run this commands at the same time 
CREATE DATABASE USER_MANAGEMENT;

CREATE TABLE public.Users(
    userID serial NOT NULL,
    password VARCHAR(20) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
	updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(userID)
);

CREATE TABLE public.UserDetails(
    UserDetailsID serial NOT NULL,
    userID INT NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DateOfBirth date NOT NULL,
    Gender VARCHAR(6) NOT NULL,
    Province VARCHAR(20) NOT NULL,
    Facilitator boolean NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
	updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(UserDetailsID)
);

ALTER TABLE public.UserDetails
    ADD FOREIGN KEY (userID)
    REFERENCES public.Users (userID)
    ON DELETE CASCADE
    NOT VALID;

-- Up until here

-- From here run every single commands
INSERT INTO Users(password)
VALUES('Mashoto*99');
-- until here

-- From here run every single commands
INSERT INTO UserDetails(userID,FirstName,LastName,DateOfBirth,Gender,Province,Facilitator)
VALUES(1,'Mash','Molefe','1999-03-26','MALE','Limpopo',True);
-- until here
