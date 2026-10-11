<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Restaurant website architecture

- Keep verified business configuration, menu items, INR prices and WhatsApp message generation in src/data/restaurant.ts so owners can update content independently of page design.
- Use separate content routes with shared header, footer and in-memory order provider; customer details are not persisted and enquiries are handed off honestly to WhatsApp.
- Keep replaceable illustrative image imports in the restaurant food-images module and disclose that they are not authentic restaurant photographs.
- Give every public content route distinct social and search metadata; bundled illustrations must not be used as relative social-image URLs.
