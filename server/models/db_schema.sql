CREATE TABLE prices (
	id serial NOT NULL,
	price real NOT NULL,
	effective_from date NOT NULL,
	effective_to date,
	utilities_type_id integer REFERENCES utilities_types (id),
	PRIMARY KEY (id)
);

CREATE TABLE households (
	id serial NOT NULL,
	name CHAR(50) NOT NULL,
	description text,
	count_of_housemates integer,
	PRIMARY KEY (id)
);

CREATE TABLE meters (
	id serial NOT NULL,
	reading integer NOT NULL,
	reading_date date NOT NULL,
	household_id integer REFERENCES households (id),
	utilities_type_id integer REFERENCES utilities_types (id),
	PRIMARY KEY (id)
);
