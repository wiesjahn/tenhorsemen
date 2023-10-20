interface Post {
  title: string;
  author: User;
  headerImageUri: string?;
  subHeading: string;
  content: string; 
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
}