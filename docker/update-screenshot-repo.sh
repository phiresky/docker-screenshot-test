#!/bin/bash
set -ue

dir="$SCREENSHOT_REPO_DIR/run-$RUN_ID"
mkdir -p "$dir"


for f in "$DOCKER_OUTPUT_DIR/screenshots/"*; do
    cp "$f" "$dir/"
    fname="$(basename "$f")"
    echo "Screenshots for $RUN_REASON_MD ([run $RUN_ID](https://github.com/$GITHUB_REPO_NAME/actions/runs/$RUN_ID))"
    echo -e "## $fname\n\n![$fname]($fname)\n" >> "$dir/README.md"
done

cd "$SCREENSHOT_REPO_DIR"
git config --local user.email "action@github.com"
git config --local user.name "GitHub Action"
git add --all
git commit -m"add run $RUN_ID"
git push