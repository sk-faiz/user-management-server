const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

exports.createUser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword,
            dob: data.dob,
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    });
};

exports.updateUser = async (data) => {
    const { id, name, email, dob } = data;

    const updatedUser = await prisma.user.update({
        where: { id: parseInt(id) },
        data: { name, email, dob },
        select: {
            id: true,
            name: true
        }
    });

    return updatedUser;
}

exports.findUserByEmail = async (email) => {
    return prisma.user.findUnique({ where: { email } });
};