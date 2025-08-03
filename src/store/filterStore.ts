import { create } from "zustand";
import { FilterState, TimeRange } from "../types/filter";

interface FilterActions {
  setLocation: (location: string[]) => void;
  setJobCategory: (jobCategory: string[]) => void;
  setPeriod: (period: string) => void;
  setWeekdays: (weekdays: string[]) => void;
  setTime: (time: TimeRange) => void;
  setGender: (gender: string) => void;
  setEducation: (education: string) => void;
  reset: () => void;
}

type FilterStore = FilterState & FilterActions;

export const useFilterStore = create<FilterStore>((set) => ({
  location: [],
  jobCategory: [],
  period: "",
  weekdays: [],
  time: { start: "", end: "" },
  gender: "무관",
  education: "무관",

  setLocation: (location) => set({ location }),
  setJobCategory: (jobCategory) => set({ jobCategory }),
  setPeriod: (period) => set({ period }),
  setWeekdays: (weekdays) => set({ weekdays }),
  setTime: (time) => set({ time }),
  setGender: (gender) => set({ gender }),
  setEducation: (education) => set({ education }),

  reset: () =>
    set({
      location: [],
      jobCategory: [],
      period: "",
      weekdays: [],
      time: { start: "", end: "" },
      gender: "무관",
      education: "무관",
    }),
}));
