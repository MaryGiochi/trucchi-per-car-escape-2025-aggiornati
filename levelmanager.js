/**
 * levelManager - Basic Level Control System
 * Author: MaryGiochi
 * License: Custom
 */

class levelManager {
    /**
     * Initializes the level manager.
     * @param {number} maxLevel - The maximum achievable level.
     */
    constructor(maxLevel = 10) {
        if (typeof maxLevel !== 'number' || maxLevel < 1) {
            throw new Error('[levelManager] Invalid maximum level.');
        }
        this.currentLevel = 1;
        this.maxLevel = maxLevel;
    }

    /**
     * Advances to the next level if possible.
     */
    next() {
        if (this.currentLevel < this.maxLevel) {
            this.currentLevel++;
            console.log(`[levelManager] Moved to level ${this.currentLevel}.`);
        } else {
            console.log('[levelManager] You have reached the final level.');
        }
    }

    /**
     * Resets the level to the first one.
     */
    reset() {
        this.currentLevel = 1;
        console.log('[levelManager] Level reset to 1.');
    }

    /**
     * Returns the current level.
     * @returns {number}
     */
    getLevel() {
        return this.currentLevel;
    }
}

// Example usage:
// const manager = new levelManager(5);
// manager.next();
// console.log(manager.getLevel()); // Output: 2
// manager.reset();

module.exports = levelManager;
