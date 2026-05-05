export default function ContactForm() {
  return (
    <div>
      <form action="hogehoge" method="post">
        <div>
          <label htmlFor="name">名前</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">メール</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">メッセージ</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

// HTMLのみ
