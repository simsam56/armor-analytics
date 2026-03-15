#!/bin/bash
# Lance le site web balise-ia (armor-analytics) et ouvre le navigateur
cd "$(dirname "$0")"
npm run dev &
sleep 3
open http://localhost:3000
