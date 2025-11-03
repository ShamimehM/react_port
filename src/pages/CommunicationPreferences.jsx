import React from 'react';
import '../styles/Communication.css';

const CommunicationPreferences = () => {
  return (
    <section className="comm-page" data-aos="fade-up">
      <div className="comm-container">
        <header className="comm-header">
          <h1>Preferences for communicating with me</h1>
          <p className="comm-note">
            This is my personal guide for working together. It’s provided “as is,” and meant to make collaboration easier.
          </p>
        </header>

        <article className="comm-section">
          <h2>From you to me</h2>
          <ul>
            <li><strong>Bias towards overcommunicating</strong> — add context; I’ll interrupt if it’s not needed.</li>
            <li><strong>State uncertainties</strong> and any assumptions you’ve made.</li>
            <li><strong>Give timely feedback</strong> — unpolished is better than late or none.</li>
            <li>
              <strong>Prefer async</strong> (email, Slack, docs) with clear action items and timelines.
              <ul>
                <li>Use Slack for short topics in shared workspaces; Email otherwise.</li>
                <li>Docs for longer items or collaboration; tag me if I must read it.</li>
                <li>Make actions obvious: prefix with “Action required:” and include deadlines.</li>
              </ul>
            </li>
            <li><strong>Don’t inline-reply to emails</strong>; avoid muddying history and forks.</li>
            <li><strong>Don’t just say hello</strong>; include the question or purpose.</li>
            <li><strong>Prefer communicating in public channels</strong> so others can benefit (except sensitive matters).</li>
            <li><strong>Synchronous</strong>: prefer in-person or Google Meet when truly needed.</li>
          </ul>
        </article>

        <article className="comm-section">
          <h2>From me to you</h2>
          <ul>
            <li>I won’t usually send acknowledgements unless asked.</li>
            <li><strong>Assume misunderstanding, not malice</strong> — tell me early if I’m off-track.</li>
            <li>I tend to overcommunicate to ensure alignment — feel free to interrupt.</li>
            <li>If I’m slow to reply, I’m likely overloaded — nudge me if it’s blocking.</li>
            <li>I may send async messages even if we’re colocated, to avoid interrupting flow.</li>
            <li>
              <strong>Emoji guide</strong>: 👀 looking, ✅ done, 👍 acknowledged, ➕ agreed, 🙌/🎉 yay
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default CommunicationPreferences;



