import React from 'react';
import '../styles/Communication.css';

const CommunicationPreferences = () => {
  return (
    <section className="comm-page" data-aos="fade-up">
      <div className="comm-container">
        <header className="comm-header">
          <h1>Preferences for Communicating With Me</h1>
          <p className="comm-note">This is my personal guide for working together. It’s provided “as is” — a mix of honesty, efficiency, and the occasional brain-glitch. The goal is simple: make collaboration smooth, clear, and maybe even a little fun.</p>
          <p className="comm-note">Also:<strong> I promise I’m not ignoring you — my brain is probably just switching tabs.</strong></p>
          <p className="comm-note">And if something sounds weird, assume I typed too fast or my dyslexia decided to freestyle… not that we suddenly hate each other.</p>
        </header>

        <article className="comm-section">
          <h2>From You to Me</h2>
          <p><strong>Bias toward overcommunicating.</strong> Share context, even if it feels like too much — I’ll interrupt or skim if it’s not needed. If you think it’s too much info, it’s probably… just right. Sometimes I forget the simplest things.</p>
          <p><strong>State uncertainties and any assumptions you’ve made.</strong> Honest guesswork is better than silent confusion. If you’re only 60% sure, tell me the 60%. My brain likes incomplete puzzles.</p>
          <p><strong>Give timely feedback.</strong> Unpolished is better than late. And late is better than none.</p>
          <p><strong>Prefer async communication</strong> (email, Slack, docs) with clear action items and timelines. I respond best when I can read, think, and reply without being ambushed by a calendar notification.</p>
          
          <p><strong>Use Slack</strong> for short topics; <strong>email</strong> otherwise. Docs for longer items — tag me if I need to read it.</p>
          <p><strong>Make actions obvious.</strong> Use “Action required:” and include deadlines. My executive function loves these more than a nice latte.</p>
          <p><strong>Don’t inline-reply to emails.</strong> Let’s avoid messy forks that spiral into chaos.</p>
          <p><strong>Don’t just say hello;</strong> include the question or purpose. Otherwise my brain will start writing a whole novel about what you might want and the anxiety will reduce my life line before you write your question.</p>
          <p><strong>Synchronous communication:</strong> Prefer in-person or Google Meet only when it’s truly needed. I function best when meetings are intentional, short, and have agendas.</p>
          
        </article>

        <article className="comm-section">
          <h2>From Me to You</h2>
          <p><strong>I don’t always send full acknowledgements, but I do react with emojis sometimes.</strong> If you ever need explicit confirmation, just let me know — I’m happy to send it.</p>
          <p><strong>Assume misunderstanding, not malice.</strong> If I’m off-track, tell me early. I get distracted easily and forget the bigger picture from time to time.</p>
          <p><strong>I tend to overcommunicate when aligning.</strong> Feel free to interrupt if I start monologuing.</p>
          <p><strong>If I’m slow to reply,</strong> I’m likely trying to translate or check if I'm making sense. Nudge me if something is blocking you.</p>
          <p><strong>I may send async messages even if we’re in the same room.</strong> It’s a focus thing — not antisocial behavior. I'm just worried I'll forget it if I don't send it now.</p>
          <p><strong>Dyslexia moment disclaimer:</strong> If something reads funny, it’s probably just my brain typing faster than reality or I might've forgotten how that word should look like.</p>
        </article>

        <article className="comm-section">
          <h2>How I Work Best</h2>
          <ul>
            <li>I thrive when expectations are clear, written down, and structured.</li>
            <li>I prefer fewer but better meetings.</li>
            <li>I like to solve problems early, before they grow teeth.</li>
            <li>If I’m quiet, I’m probably processing — or debugging my thoughts.</li>
            <li>Direct but kind communication works best with me.</li>
            <li>Screenshots and examples = chef’s kiss.</li>
            <li>Clarity gives me joy (almost as much as warm coffee).</li>
          </ul>
        </article>

        <article className="comm-section">
          <h2>How to Get the Fastest Yes/No From Me</h2>
          <ul>
            <li>Tell me why it matters.</li>
            <li>Tell me when you need it.</li>
            <li>Tell me the minimum viable answer you want.</li>
            <li>Include a TL;DR if possible.</li>
            <li>Bonus: attach screenshots, examples, or a doc.</li>
            <li><strong>Ultra bonus:</strong> show up with coffee.</li>
          </ul>
        </article>

        <article className="comm-section">
          <h2>My Communication Quirks</h2>
          <ul>
            <li>I may forget to say “Hi” and jump straight into content. It’s not rudeness — I just forgot this is the first time I’m talking to you today.</li>
            <li>I sometimes answer in bullet points — my brain likes organized chaos. ✨</li>
            <li>I re-read messages to avoid sounding like a robot… sometimes I still sound like a robot.</li>
            <li>If I respond fast, I’m hyperfocused.</li>
            <li>If I respond slow, I’m in a different universe temporarily.</li>
          </ul>
        </article>

        <article className="comm-section">
          <h2>Peak Productivity Times</h2>
          <ul>
            <li><strong>Mornings:</strong> slow boot-up; please wait.</li>
            <li><strong>Afternoons:</strong> optimal functioning achieved.</li>
            <li><strong>Evenings:</strong> enter “coding goblin mode” on a random schedule.</li>
          </ul>
        </article>

        <article className="comm-section">
          <h2>Meeting Preferences</h2>
          <ul>
            <li>Please bring an agenda.</li>
            <li>“Let’s brainstorm live” only works if under ~20 minutes.</li>
            <li>I appreciate one designated note-taker <strong>or an AI taking notes</strong> so future-me knows what past-us decided.</li>
          </ul>
        </article>

        <article className="comm-section">
          <h2>Feedback Preferences</h2>
          <ul>
            <li>Direct but compassionate.</li>
            <li>Early feedback &gt; perfect feedback.</li>
            <li>Written feedback sticks better for me.</li>
            <li>If I look confused, I probably am — feel free to rephrase.</li>
          </ul>
        </article>

        <article className="comm-section">
          <h2>My Emoji Directory</h2>
          <ul>
            <p>👀 looking</p>
            <p>🧠 thinking</p>
            <p>🤔 “Huh! Interesting!”</p>
            <p>⚠️ “This might break something”</p>
            <p>🐌 progress</p>
            <p>🐛 mention of bugs</p>
            <p>🔥 hyperfocused</p>
            <p>✨ finally understood something</p>
            <p>🎉 yay</p>
            <p>👍🏻 acknowledged / on it</p>
            <p>👌🏻 agreed / nicely done</p>
            <p>✅ done</p>
          </ul>
        </article>

        <article className="comm-section">
          <h2>Things That Make Collaboration Smooth</h2>
          <ul>
            <li>Explain <em>why</em> something matters — meaning boosts motivation.</li>
            <li>I love clarity more than I love coffee (and I really love coffee).</li>
            <li>Bring kindness and humor; the workplace is not the Supreme Court.</li>
            <li>Let’s debug disagreements together — no drama needed.</li>
          </ul>
        </article>

        <article className="comm-section">
          <h2>What to Avoid</h2>
          <ul>
            <li>Vague deadlines floating in the void.</li>
            <li><div>“We need to sync” with no agenda.</div> 
                <div>“Let’s sync” with no details has the same vibe as “We need to talk,” and my stress level does not need that journey.</div>
            </li>
            <li><div>Long, unstructured text blocks.</div>
              <div>I struggle a bit with them. I will read them, but I may run them through an AI just to make sure I understood your meaning correctly. So clearer structure helps me respond more accurately.</div>
            </li>
            <li>Surprises — except snacks. Snacks are always welcome.</li>
          </ul>
        </article>

        <article className="comm-section">
          <p>This whole guide is a soft guideline, not a rulebook. We all grow together, adjust to each other, and find our rhythm as we collaborate. Think of this as a quick “user manual preview” for working with me rather than anything formal.</p>
        </article>
      </div>
    </section>
  );
};

export default CommunicationPreferences;



