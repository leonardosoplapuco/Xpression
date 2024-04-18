CREATE TABLE IF NOT EXISTS public.mensajes_borrador
(
    draft_id serial NOT NULL,
    "sender_id(FK)" integer NOT NULL,
    "recipient_id(FK)" integer NOT NULL,
    message_content text,
    draft_date timestamp without time zone NOT NULL,
    CONSTRAINT message_drafts_pkey PRIMARY KEY (draft_id)
);

CREATE TABLE IF NOT EXISTS public."configuración_aplicación"
(
    config_id serial NOT NULL,
    "user_id(FK)" integer NOT NULL,
    language text,
    theme text,
    notification_settings text,
    PRIMARY KEY (config_id)
);

CREATE TABLE IF NOT EXISTS public.mensajes_favoritos
(
    favorite_id serial NOT NULL,
    "user_id(FK)" integer NOT NULL,
    "message_id(FK)" integer NOT NULL,
    favorite_date timestamp without time zone NOT NULL,
    PRIMARY KEY (favorite_id)
);

CREATE TABLE IF NOT EXISTS public.historial_busqueda
(
    search_id serial NOT NULL,
    "user_id(FK)" integer NOT NULL,
    search_query text,
    search_date timestamp without time zone NOT NULL,
    PRIMARY KEY (search_id)
);

CREATE TABLE IF NOT EXISTS public.notas_personales
(
    note_id serial NOT NULL,
    "user_id(FK)" integer,
    note_content text,
    creation_date timestamp without time zone NOT NULL,
    last_modified timestamp without time zone NOT NULL,
    PRIMARY KEY (note_id)
);

CREATE TABLE IF NOT EXISTS public.usuarios
(
    user_id serial NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS public.mensajes
(
    "message_id " serial NOT NULL,
    sender_id integer NOT NULL,
    recipient_id integer NOT NULL,
    message_content text,
    message_date timestamp without time zone NOT NULL,
    PRIMARY KEY ("message_id ")
);

ALTER TABLE IF EXISTS public.mensajes_borrador
    ADD FOREIGN KEY ("sender_id(FK)")
    REFERENCES public.usuarios (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.mensajes_borrador
    ADD FOREIGN KEY ("recipient_id(FK)")
    REFERENCES public.usuarios (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.mensajes_favoritos
    ADD FOREIGN KEY ("user_id(FK)")
    REFERENCES public.usuarios (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.historial_busqueda
    ADD FOREIGN KEY ("user_id(FK)")
    REFERENCES public.usuarios (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.notas_personales
    ADD FOREIGN KEY ("user_id(FK)")
    REFERENCES public.usuarios (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.mensajes
    ADD FOREIGN KEY (sender_id)
    REFERENCES public.usuarios (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.mensajes
    ADD FOREIGN KEY (recipient_id)
    REFERENCES public.usuarios (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."configuración_aplicación"
    ADD FOREIGN KEY ("user_id(FK)")
    REFERENCES public.usuarios (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;
