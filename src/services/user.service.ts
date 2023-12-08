import { User } from "@/models/entity.model";

export async function getAllUsers(): Promise<Array<User>> {
    try {
        const response = await fetch(`${process.env.APP_DOMAIN}/api/user`, {
            cache: "no-store",
        });
        const users: Array<User> = await response.json();
        return users;
    } catch (error) {
        return [
            {
                _id: "",
                avatar: "",
                date_of_birth: "",
                email: "",
                gender: "",
                name: "",
                phone: "",
                status: "active",
                addresses: [
                    {
                        _id: "",
                        city: "",
                        country: "",
                        district: "",
                        town: "",
                        street: "",
                        isMain: false,
                    },
                ],
            },
        ];
    }
}
