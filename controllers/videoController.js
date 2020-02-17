import { videos } from "../db";

export const home = (req, res) => { res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
    const {
        query: {tern: searchingBy }
    } = req;    
    res.render("search", {pageTile: "Search", searchingBy });
}
export const upload = (req, res) => res.render("upload", {pageTile: "Upload" });
export const videoDetail = (req, res) => res.render("videoDetail", {pageTile: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", {pageTile: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTile: "Delete Video" });
