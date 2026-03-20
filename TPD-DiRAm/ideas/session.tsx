type Mentor = {
  id: string;
  name: string;
};

type Mentee = {
  id: string;
  name: string;
};

type Session = {
  day: string;  /* only one session per day per mentor possible */ 
  mentorId: string;
  menteeIds: string[];
};

class MentoringSystem {
  private sessions: Session[] = [];

  addSession(mentorId: string, menteeIds: string[]) {
    const heuteIso = new Date().toISOString().slice(0, 10);
    this.sessions.push({
      day: heuteIso,
      mentorId,
      menteeIds,
    });
  }
