import { combineReducers } from "redux";
import { loginReducer } from "./reducer/loginReducer";
import { signupReducer } from "./reducer/signupReducer";
import { userReducer } from "./reducer/userReducer";
import { chatReducer } from "./reducer/chatReducer";
import { publicChatReducer } from "./reducer/publicChatReducer";
import { groupChatReducer } from "./groupChat/groupChatReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  user: userReducer,
  chat: chatReducer,
  publicChat: publicChatReducer,
  groupChat: groupChatReducer
})