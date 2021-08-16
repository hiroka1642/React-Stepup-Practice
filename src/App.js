import { BrowserRouter } from "react-router-dom";
import { PrymaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecoundaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/template/DefaultLayout";
import "./styles.css";

const user = {
  name: "じゃけえ",
  image: "https://source.unsplash.com/73pyV0JJOmE",
  email: "12345@example.com",
  phone: "090-2121-4343",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrymaryButton children="テスト" />
        <SecondaryButton children="検索" />
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
