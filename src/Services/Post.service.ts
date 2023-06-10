import axios from "axios";

export class PostService {
    private static Url: string = 'https://jsonplaceholder.typicode.com'

    public static getAllPosts() {
        let postURL: string = `${this.Url}/posts`
        return axios.get(postURL)
    }
}