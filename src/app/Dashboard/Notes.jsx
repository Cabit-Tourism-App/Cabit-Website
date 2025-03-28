import React from "react";
import "./Notes.css";

const ChatUI = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <button className="chat-button">best places to eat in lucknow</button>
        <div className="chat-icon"></div>
      </div>

      <div className="chat-box">
        <p>
          Lucknow is renowned for its rich culinary heritage, especially its
          Mughlai cuisine. Here are some of the best places to eat in Lucknow:
        </p>
        <ol>
          <li>
            <strong>Tunday Kababi</strong> - Famous for its delicious kebabs,
            particularly the Tunday Kababi, this iconic eatery is a must-visit
            for meat lovers.
          </li>
          <li>
            <strong>Idris Biryani</strong> - Known for its flavorful biryani,
            Idris Biryani is a popular spot among locals and visitors alike.
            The mutton biryani here is especially recommended.
          </li>
          <li>
            <strong>Mauka Mauka</strong> - A great place to enjoy authentic
            Awadhi cuisine, this restaurant offers a variety of kebabs, curries,
            and breads in a cozy setting.
          </li>
          <li>
            <strong>Biryani House</strong> - Another excellent spot for biryani,
            this restaurant serves a range of biryani options, including
            chicken, mutton, and vegetarian varieties.
          </li>
          <li>
            <strong>Dastarkhwan</strong> - Known for its traditional Lucknow
            dishes, Dastarkhwan offers a rich selection of kebabs, curries, and
            desserts in a comfortable ambiance.
          </li>
          <li>
            <strong>Royal Cafe</strong> - A popular multi-cuisine restaurant,
            Royal Cafe is famous for its chaat, especially the basket chaat.
          </li>
        </ol>
      </div>

      <div className="chat-footer">
        <input
          type="text"
          className="chat-input"
          placeholder='Ask travel related questions like "best food in lucknow"'
        />
        <button className="send-button">➝</button>
      </div>
    </div>
  );
};

export default ChatUI;
