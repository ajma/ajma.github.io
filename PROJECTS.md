# Projects

## Family Calendar
Github: https://github.com/ajma/family-calendar

Family Calendar brings all your family's Google Calendars together into one clean, unified weekly view — making it easy to see everyone's schedule at a glance without jumping
  between accounts or apps.

  Connect multiple Google Calendars and choose exactly which ones to display. Assign a color, emoji, and nickname to each calendar so events are instantly recognizable. Filter
  events by hashtag so a shared calendar can serve multiple purposes — only show what matters to you.

  Each family member gets their own profile with a name, color, and initials. Calendar events are automatically matched to the right people, so attendee chips appear on every
  event card showing who's involved. Use the #allfamily tag in any event description to automatically include everyone — no manual attendee management needed.

  Presentation Mode turns your calendar into a family discussion tool. Connect a TV or second screen, hit a button, and walk through the week's events one by one using your
  keyboard. Each event is revealed in sequence so you can talk through the schedule together without distractions — perfect for Sunday planning sessions.

  Privacy controls let you hide specific people from the view entirely, or dismiss individual events you don't want cluttering the display. Hidden events are automatically
  pruned after several months so your settings stay lean over time.

  The app runs as a self-hosted web service, keeping your calendar data and Google credentials entirely within your own infrastructure. OAuth tokens are encrypted at rest,
  sessions are secured with signed JWTs, and the entire stack — React frontend, Express backend, SQLite storage — can be deployed with a single Docker container.

  No subscriptions. No third-party data sharing. Just your family's schedule, your way.

## Autoworklog
Github: https://github.com/ajma/autoworklog
Chrome Web Store: https://chromewebstore.google.com/detail/apkojokccjifidcedpijelabpjfkaibh/preview?hl=en&authuser=0

Tracks Google Docs visits and time spent, then exports a daily summary to a Google Doc.

Auto Work Log automatically tracks time spent on Google Workspace documents and other web-based tools throughout your workday. It runs quietly in the background, recording which documents you visit, how long you spend on each one, and how many times you return to them.

The popup shows a clean daily summary of your activity, including document titles, time spent, and visit counts. You can browse previous days, filter entries by name, and remove individual items. When you're ready, export your log to a Google Sheet with one click, or copy it to your clipboard for use in other tools.

Configurable URL rules let you customize exactly which sites are tracked. The extension comes preconfigured for Google Docs, Sheets, Slides, Forms, Drawings, and Sites, but you can add your own rules using regex patterns to track time on any web application — project management tools, wikis, internal dashboards, or anything else you use for work.

Key features:

- Automatic time tracking with no manual input required
- Daily log with per-document time and visit counts
- Day-by-day history with configurable retention
- One-click export to Google Sheets
- Clipboard copy for quick sharing
- Customizable URL rules with regex pattern matching
- Pause and resume tracking at any time
- Import and export settings as JSON for backup or sharing across devices
- Favicon icons for easy visual identification of sites
- Dark mode support

All data is stored locally on your device. The extension only connects to Google's servers when you choose to export your log to a Sheet. No data is collected, shared, or sent anywhere else.