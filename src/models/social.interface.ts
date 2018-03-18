export interface ReviewsResponse {
  reviews: Array<Review>;
  title?: string;
}

export interface Review {
  userName: string;
  text: string;
  date?: string;
  imageUrl?: string;
}
