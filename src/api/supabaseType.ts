export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      accounts: {
        Row: {
          avatar: string | null
          created_at: string
          id: number
          userName: string | null
        }
        Insert: {
          avatar?: string | null
          created_at?: string
          id?: number
          userName?: string | null
        }
        Update: {
          avatar?: string | null
          created_at?: string
          id?: number
          userName?: string | null
        }
        Relationships: []
      }
      bookings: {
        Row: {
          addBed: number | null
          addPerson: number | null
          created_at: string
          endDate: string | null
          extrasPrice: number | null
          guestId: number | null
          hasBreakfast: boolean | null
          id: number
          isPaid: boolean | null
          isPaidAmount: number | null
          numGuests: number | null
          numNights: number | null
          observations: string | null
          roomId: number | null
          roomPrice: number | null
          specialRoomRequests: string | null
          startDate: string | null
          status: string | null
          totalPrice: number | null
        }
        Insert: {
          addBed?: number | null
          addPerson?: number | null
          created_at?: string
          endDate?: string | null
          extrasPrice?: number | null
          guestId?: number | null
          hasBreakfast?: boolean | null
          id?: number
          isPaid?: boolean | null
          isPaidAmount?: number | null
          numGuests?: number | null
          numNights?: number | null
          observations?: string | null
          roomId?: number | null
          roomPrice?: number | null
          specialRoomRequests?: string | null
          startDate?: string | null
          status?: string | null
          totalPrice?: number | null
        }
        Update: {
          addBed?: number | null
          addPerson?: number | null
          created_at?: string
          endDate?: string | null
          extrasPrice?: number | null
          guestId?: number | null
          hasBreakfast?: boolean | null
          id?: number
          isPaid?: boolean | null
          isPaidAmount?: number | null
          numGuests?: number | null
          numNights?: number | null
          observations?: string | null
          roomId?: number | null
          roomPrice?: number | null
          specialRoomRequests?: string | null
          startDate?: string | null
          status?: string | null
          totalPrice?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_guestId_fkey"
            columns: ["guestId"]
            isOneToOne: false
            referencedRelation: "guests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_roomId_fkey"
            columns: ["roomId"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          }
        ]
      }
      bulletin: {
        Row: {
          categoryName: string | null
          created_at: string
          eventCategory: string | null
          eventContent: string | null
          id: number
          isDone: boolean | null
        }
        Insert: {
          categoryName?: string | null
          created_at?: string
          eventCategory?: string | null
          eventContent?: string | null
          id?: number
          isDone?: boolean | null
        }
        Update: {
          categoryName?: string | null
          created_at?: string
          eventCategory?: string | null
          eventContent?: string | null
          id?: number
          isDone?: boolean | null
        }
        Relationships: []
      }
      guests: {
        Row: {
          created_at: string
          email: string | null
          fullName: string | null
          gender: string | null
          id: number
          nationalCode: string | null
          nationalID: string | null
          nationality: string | null
          phoneNumber: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          fullName?: string | null
          gender?: string | null
          id?: number
          nationalCode?: string | null
          nationalID?: string | null
          nationality?: string | null
          phoneNumber?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          fullName?: string | null
          gender?: string | null
          id?: number
          nationalCode?: string | null
          nationalID?: string | null
          nationality?: string | null
          phoneNumber?: string | null
        }
        Relationships: []
      }
      rooms: {
        Row: {
          canAddBed: boolean | null
          canAddPerson: number | null
          created_at: string
          discount: number | null
          floor: string | null
          id: number
          maxCapacity: number | null
          name: string | null
          numRooms: number | null
          regularPrice: number | null
          roomDescription: string | null
          roomFeatures: Json | null
          roomPhotos: string[] | null
          roomPrimayPhoto: string | null
          roomType: string | null
          squareMeters: number | null
        }
        Insert: {
          canAddBed?: boolean | null
          canAddPerson?: number | null
          created_at?: string
          discount?: number | null
          floor?: string | null
          id?: number
          maxCapacity?: number | null
          name?: string | null
          numRooms?: number | null
          regularPrice?: number | null
          roomDescription?: string | null
          roomFeatures?: Json | null
          roomPhotos?: string[] | null
          roomPrimayPhoto?: string | null
          roomType?: string | null
          squareMeters?: number | null
        }
        Update: {
          canAddBed?: boolean | null
          canAddPerson?: number | null
          created_at?: string
          discount?: number | null
          floor?: string | null
          id?: number
          maxCapacity?: number | null
          name?: string | null
          numRooms?: number | null
          regularPrice?: number | null
          roomDescription?: string | null
          roomFeatures?: Json | null
          roomPhotos?: string[] | null
          roomPrimayPhoto?: string | null
          roomType?: string | null
          squareMeters?: number | null
        }
        Relationships: []
      }
      settings: {
        Row: {
          accommodationsRegulation: string | null
          breakfastPrice: number | null
          checkInTime: string | null
          checkOutTime: string | null
          contactPerson: string | null
          created_at: string
          hotelAddress: string | null
          hotelEmail: string | null
          hotelFax: string | null
          hotelTel: string | null
          id: number
          mealTime: string | null
          privacyPolicy: string | null
        }
        Insert: {
          accommodationsRegulation?: string | null
          breakfastPrice?: number | null
          checkInTime?: string | null
          checkOutTime?: string | null
          contactPerson?: string | null
          created_at?: string
          hotelAddress?: string | null
          hotelEmail?: string | null
          hotelFax?: string | null
          hotelTel?: string | null
          id?: number
          mealTime?: string | null
          privacyPolicy?: string | null
        }
        Update: {
          accommodationsRegulation?: string | null
          breakfastPrice?: number | null
          checkInTime?: string | null
          checkOutTime?: string | null
          contactPerson?: string | null
          created_at?: string
          hotelAddress?: string | null
          hotelEmail?: string | null
          hotelFax?: string | null
          hotelTel?: string | null
          id?: number
          mealTime?: string | null
          privacyPolicy?: string | null
        }
        Relationships: []
      }
      system: {
        Row: {
          created_at: string
          id: number
          NumRowsPerPage: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          NumRowsPerPage?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          NumRowsPerPage?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
