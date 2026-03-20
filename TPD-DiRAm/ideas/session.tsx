type Mentor = {
  id: string;
  name: string;
};

type Mentee = {
  id: string;
  name: string;
};

type Session = {
  id: number;
  mentorId: string;
  menteeIds: string[];
};

class MentoringSystem {
  private mentors: Mentor[] = [];
  private mentees: Mentee[] = [];
  private sessions: Session[] = [];

  addMentor(mentor: Mentor) {
    this.mentors.push(mentor);
  }

  addMentee(mentee: Mentee) {
    this.mentees.push(mentee);
  }

  addSession(mentorId: string, menteeIds: string[]) {
    this.sessions.push({
      id: this.sessions.length + 1,
      mentorId,
      menteeIds,
    });
  }
