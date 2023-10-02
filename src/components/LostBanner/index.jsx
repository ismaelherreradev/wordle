import Banner from "../Banner";

export default function LostBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>
        Sorry! The answer was <strong>{answer}</strong>
      </p>
    </Banner>
  );
}