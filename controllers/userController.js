export const join = (req, res) => res.render("join", {pageTile: "Join" });
export const login = (req, res) => res.render("login", {pageTile: "Login" });
export const logout = (req, res) => res.render("logout", {pageTile: "Logout" });
export const userDetail = (req, res) => res.render("userDetail", {pageTile: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", {pageTile: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", {pageTile: "Change Password" });
