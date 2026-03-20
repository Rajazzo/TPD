
const system = new MentoringSystem();

// Mentoren
system.addMentor({ id: "m1", name: "Alice" });
system.addMentor({ id: "m2", name: "Bob" });

// Mentees
system.addMentee({ id: "t1", name: "Tom" });
system.addMentee({ id: "t2", name: "Lisa" });
system.addMentee({ id: "t3", name: "Max" });

// Sessions (Termine)
system.addSession("m1", ["t1", "t2"]);
system.addSession("m2", ["t2", "t3"]);
system.addSession("m1", ["t1", "t3"]);
system.addSession("m2", ["t1", "t2", "t3"]);

// Auswertung
system.printStatistics();

/**
 * Gibt zurück:
 * menteeId -> mentorId -> Anzahl Treffen
 */
  getStatistics() {
    const stats: Record<string, Record<string, number>> = {};

    for (const session of this.sessions) {
      for (const menteeId of session.menteeIds) {
        if (!stats[menteeId]) {
          stats[menteeId] = {};
        }

        if (!stats[menteeId][session.mentorId]) {
          stats[menteeId][session.mentorId] = 0;
        }

        stats[menteeId][session.mentorId]++;
      }
    }

    return stats;
  }

  /**
   * Schön lesbare Ausgabe
   */
  
  printStatistics() {
    const stats = this.getStatistics();

    for (const menteeId in stats) {
      const mentee = this.mentees.find(m => m.id === menteeId);
      console.log(`\nMentee: ${mentee?.name}`);

      for (const mentorId in stats[menteeId]) {
        const mentor = this.mentors.find(m => m.id === mentorId);
        const count = stats[menteeId][mentorId];

        console.log(`  Mentor ${mentor?.name}: ${count}`);
      }
    }
  }