import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export interface Booking {
  id: string;
  guideId: string;
  guideName: string;
  guideImage: string;
  tourName: string;
  date: string;
  people: number;
  totalPrice: number;
  status: "confirmed" | "completed" | "cancelled";
}

interface User {
  name: string;
  email: string;
  initials: string;
}

interface AuthContextType {
  user: User | null;
  bookings: Booking[];
  signIn: (email: string) => Promise<void>;
  signUp: (email: string, name: string) => Promise<void>;
  signOut: () => void;
  addBooking: (booking: Omit<Booking, "id" | "status">) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const signIn = useCallback(async (email: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setUser({
      name: "Explorer",
      email: email,
      initials: "E"
    });
  }, []);

  const signUp = useCallback(async (email: string, name: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setUser({
      name: name,
      email: email,
      initials: name.charAt(0).toUpperCase()
    });
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    setBookings([]);
  }, []);

  const addBooking = useCallback((booking: Omit<Booking, "id" | "status">) => {
    const newBooking: Booking = {
      ...booking,
      id: Math.random().toString(36).substr(2, 9),
      status: "confirmed"
    };
    setBookings(prev => [newBooking, ...prev]);
  }, []);

  return (
    <AuthContext.Provider value={{ user, bookings, signIn, signUp, signOut, addBooking }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
