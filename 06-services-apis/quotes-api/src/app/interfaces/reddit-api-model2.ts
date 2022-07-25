export interface RedditResponse {
  data: RedditReseponeData
}

export interface RedditReseponeData {
  children: RedditResponseItem[];
}

export interface RedditResponseItem {
  data: RedditPost;
}

export interface RedditPost {
  title: string;
  permalink: string;
  thumbnail: string;
}


// Less interface version... use nested objects within interfaces
export interface RedditResponse3 {
  data: {
    children: RedditResponseItem
  }
}