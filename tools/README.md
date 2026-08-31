# How `data/allgemein.js` and `assets/` were produced

The scripts are kept for provenance: they document exactly where every question
text, answer and image came from. They are not needed to use the trainer.

Run them in order from a scratch directory containing the official PDF as
`kat.pdf` and the three reference datasets:

```bash
curl -o kat.pdf "https://www.bamf.de/SharedDocs/Anlagen/DE/Integration/Einbuergerung/gesamtfragenkatalog-lebenindeutschland.pdf?__blob=publicationFile"
pdftotext -layout kat.pdf kat.txt

curl -o ds_flex.json "https://raw.githubusercontent.com/flexsurfer/einburgerungstest/HEAD/packages/mobile-app/assets/data.json"
curl -o ds_lid.json  "https://raw.githubusercontent.com/leben-in-deutschland/leben-in-deutschland-scrapper/HEAD/data/question.json"
curl -o ds_md.json   "https://raw.githubusercontent.com/mdreier/einbuergerungsQuiz/HEAD/webapp/data/questions.json"

python3 1-parse-pdf.py         # kat.txt        -> pdf_parsed.json  (460 questions)
python3 2-build-answer-key.py  # + 3 datasets   -> key_raw.json     (answers + agreement)
python3 3-emit-data.py         # key_raw.json   -> allgemein.js
python3 4-crop-images.py       # kat.pdf        -> img/q0NN.jpg
```

Requires `poppler-utils` (pdftotext, pdftoppm, pdfimages) and ImageMagick.

## What each step does

1. **`1-parse-pdf.py`** — extracts the questions from the official PDF. The
   options are marked with a Wingdings checkbox glyph (`U+F0A3`), which is how
   option lines are told apart from wrapped question text. Strips page
   furniture, re-joins wrapped options, and splits trailing photo credits into
   a `credit` field. Asserts 300 nationwide questions numbered 1–300
   contiguously, 10 per Bundesland, and exactly 4 options each.

2. **`2-build-answer-key.py`** — the official PDF contains **no solutions**, so
   the key is cross-checked against three independent public datasets. Matching
   is done on the *set of four option texts* rather than the question text,
   because the catalogue contains repeated question texts with different options
   (five "Welches Land ist ein Nachbarland von Deutschland?", five
   "… gehörte früher zum Gebiet der DDR?"). The correct answer is resolved by
   answer *text* and then mapped back to the PDF's option order, so a dataset
   that stores its options in a different order cannot corrupt the key.

3. **`3-emit-data.py`** — writes `allgemein.js`, recording per question how many
   sources agreed (`srcs`).

4. **`4-crop-images.py`** — renders the nine pages carrying picture questions at
   170 dpi and crops the illustration band. The crop is bounded above by the
   last word of the question text and below by the photo credit (or the first
   option), located via `pdftotext -bbox` word coordinates.

## Result

- 238 questions: all three sources agree
- 31 questions: two sources agree
- 31 questions: only one source had the question
- **0 contradictions** anywhere in the 460

Additional checks that passed:

- `flex` aligns 1:1 positionally with the official PDF across all 460 records
  (0/160 state mismatches, 5 trivial text diffs in the 300 — typo fixes and
  spacing), so its answer key is index-aligned with the official catalogue.
- The five "neighbouring country" answers are five distinct real neighbours of
  Germany; the five "former DDR territory" answers are five distinct former DDR
  states.
- The three "which picture" answers (21, 209, 226) were confirmed by eye against
  the extracted images.
