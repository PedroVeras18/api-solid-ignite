import { SearchGymsUseCase } from "../search-gyms"
import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository"

export function MakeSearchGymsUseCase() {
    const gymsInsRepository = new PrismaGymsRepository()
    const useCase = new SearchGymsUseCase(gymsInsRepository)

    return useCase
}