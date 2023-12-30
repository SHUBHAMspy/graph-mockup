export interface UserData {
  name: string;
  email: string;
  bio: string;
  subscriptionPlan?: string;
}
const mockUserData:UserData = {
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  bio: "Hi there! 👋 I'm Alice, a passionate explorer of the digital world. By day, I'm a software engineer, and by night, I'm a creative writer. I love coding, reading science fiction novels, and sipping on a good cup of coffee. Let's connect and share our coding adventures!",
  subscriptionPlan: 'Basic'
}

export default mockUserData