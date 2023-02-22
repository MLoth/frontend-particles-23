import dom from './script/dom'
import { particleSystem } from './script/particleSystem'
import './style/reset.css'
import './style/style.css'

const ctx = dom.setup('#particleContainer')

if (ctx) {
  particleSystem.passContext(ctx)
  // Override van de default waarde van 100000
  particleSystem.generate(1000)
  particleSystem.animate()
}

// Module voor particleSystem (revealing module pattern - iife - self-invoking function)
