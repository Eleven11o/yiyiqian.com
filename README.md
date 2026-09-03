# Yiyi Qian Portfolio

This is the source code for Yiyi Qian's personal portfolio and research archive.

The site presents Yiyi as an **Artist + XR/HCI Researcher** working across cinematic VR, spatial storytelling, viewer experience, intelligent creative systems, interactive media, and immersive cultural heritage.

The website is built with Astro and produces static HTML. It has no database, login system, CMS, or client-side framework.

## Project location

The project is stored on the D drive:

```text
D:\Projects\Yiyi-Portfolio
```

Git and Node.js are also installed as portable tools on the D drive:

```text
D:\Programs\Git
D:\Programs\NodeJS
```

## Start the website locally

Open PowerShell, then copy and run these commands:

```powershell
Set-Location -LiteralPath 'D:\Projects\Yiyi-Portfolio'
$env:Path = 'D:\Programs\NodeJS;D:\Programs\Git\cmd;' + $env:Path
npm.cmd run dev
```

After Astro starts, it will print a local address, usually:

```text
http://localhost:4321/
```

Open that address in your browser.

## Stop the website

Return to the PowerShell window where the website is running and press:

```text
Ctrl + C
```

If PowerShell asks whether to terminate the job, type `Y` and press Enter.

## Build the production version

Run:

```powershell
Set-Location -LiteralPath 'D:\Projects\Yiyi-Portfolio'
$env:Path = 'D:\Programs\NodeJS;D:\Programs\Git\cmd;' + $env:Path
npm.cmd run build
```

The finished static website will be generated in `dist/`. Do not edit files inside `dist/` because they are regenerated on every build.

## Where to edit the homepage

Edit:

```text
src/content/pages/home.md
```

The most important fields are:

- `position`: the short identity line.
- `practiceLine`: research and practice keywords.
- `researchStatement`: the main homepage research direction.
- `introduction`: the short statement connecting art and research.

Text must stay inside quotation marks if it contains punctuation such as a colon.

## Where to edit the biography

Edit:

```text
src/content/pages/about.md
```

The current biography, education, awards, exhibitions, experience, and skills were prepared from the supplied CVs. Update this file whenever the CV changes.

Do not publish private personal information or reference contact details without permission.

## How to add or edit a project

Project files are in:

```text
src/content/projects/
```

Each `.md` file becomes a project page. To add a project:

1. Copy an existing project file.
2. Give it a short lowercase filename, for example `new-vr-project.md`.
3. Replace its content.
4. Choose one primary `category`:
   - `Cinematic VR`
   - `Interactive Media`
   - `Research Projects`
5. Add topic `tags`, such as `Cultural Heritage`, `Spatial Narrative`, `Human–AI Co-Creation`, or `HCI`.
6. Set `featured: true` only if the project should appear on the homepage.
7. Use `order` to control display order. Lower numbers appear first.

The project narrative follows:

```text
Artwork / Experience
→ Research Question
→ Creative Process
→ Reflection / Outcome
```

Optional sections can be removed completely without breaking the page.

## Where to put project images

For the easiest workflow, place web-optimized images in:

```text
public/images/projects/project-name/
```

Then reference an image like this in a project file:

```yaml
cover: "/images/projects/project-name/cover.jpg"
coverAlt: "A clear description of the artwork for screen-reader users"
coverWidth: 1600
coverHeight: 1000
```

Recommended preparation:

- Use descriptive lowercase filenames such as `deepcore-environment-01.jpg`.
- Export JPEG or WebP versions for the web.
- Do not serve original 8K production files directly.
- Aim for approximately 1600–2400 pixels on the longest edge for large images.
- Keep the original artwork files somewhere outside this website as a master archive.
- Write meaningful alt text; use `alt: ""` only for decorative images.

Placeholder artwork is currently stored in `public/images/placeholders/`. The written content now comes from the supplied CVs, but the placeholders must still be replaced with verified project images.

## How to add publications

Edit:

```text
src/data/publications.json
```

The page automatically separates entries into:

- Academic Publications
- Creative Research Outputs
- Under Review

Each entry can support authors, venue, conference, year, DOI, PDF, project link, and citation information. Do not add invented or confidential submission information.

## Academic profile links

Edit:

```text
src/data/profile.ts
```

This file contains places for:

- Email
- Google Scholar
- ORCID
- LinkedIn
- Institution
- CV
- Future public reference information

Leave a field empty if the real value is not ready.

## Replace the CV

Place the real PDF here:

```text
public/cv/Yiyi-Qian-CV.pdf
```

Then edit `src/data/profile.ts` and change:

```ts
cvAvailable: false,
```

to:

```ts
cvAvailable: true,
```

Until then, the CV page displays a safe placeholder and does not create a broken download link.

## Change the navigation

Edit the `navigation` list in:

```text
src/data/site.ts
```

Keep the navigation short. Contact remains in the footer to preserve the restrained editorial header.

## Important folders not to delete

- `src/`: all website source code and editable content.
- `public/`: images, CV, favicon, and public files.
- `.git/`: the complete version history. It may be hidden in File Explorer.
- `node_modules/`: installed dependencies. Do not edit it manually. It can be recreated with `npm.cmd install` if accidentally removed.

You may delete `dist/` and `.astro/` if necessary; the build command will recreate them.

## Before publishing later

Before deployment:

1. Add the final domain to `src/data/site.ts`.
2. Replace the Open Graph placeholder image.
3. Add verified project images and content.
4. Replace the CV placeholder.
5. Check every external academic link.
6. Run `npm.cmd run build`.

The current project is intentionally local only. No deployment or domain configuration has been performed.
