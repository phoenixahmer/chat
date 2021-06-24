import { combineReducers } from "redux";
import { loginReducer } from "./reducer/loginReducer";
import { userReducer } from "./reducer/userReducer";
import { chatReducer } from "./reducer/chatReducer";
import { publicChatReducer } from "./reducer/publicChatReducer";
export const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  chat: chatReducer,
  publicChat: publicChatReducer
})