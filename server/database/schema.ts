import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("users", {
	userId: int("userId").primaryKey({autoIncrement: true}),
	userName: text("userName").notNull(),
	userLoginId: int("userLoginId").references(() => login.loginId),
});

export const login = sqliteTable("logins", {
	loginId: int("loginId").primaryKey({autoIncrement: true}),
	loginEmail: text("loginEmail").notNull(),
	loginPassword: text("loginPassword").notNull(),
});
