function MyButton() {
  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
<button>I'm a button</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}